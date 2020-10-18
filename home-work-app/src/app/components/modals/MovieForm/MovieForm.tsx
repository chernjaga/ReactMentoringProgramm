import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { ErrorMessage, useFormik } from 'formik';
import {
    EditForm,
    EditFormFieldset,
    EditFormLegend,
    Label,
    Input,
} from './EditFormStyleSet.styled';
import { ButtonPanel, Button } from '../CommonModalTemplate/ButtonPanel.styled';
import { FormField, GlobalState, MapDispatchToProps, MapStateToProps } from '../../../types';
import { addMovie } from '../../../redux/actions/addMovie';
import { editMovie } from '../../../redux/actions/editMovie';
import { IApiResponse } from '../../../interfaces/IApiResponse';
import { MovieService } from '../../../services/MovieService';

interface MovieFormProps extends MapDispatchToProps {
    legend: string;
    fields: FormField[];
    errorMessage: string[];
    movieId?: number;
    closeHandler?: (event: React.MouseEvent | React.FormEvent<HTMLFormElement>) => void;
}

type FormValues = {
    [key: string]: string | number;
};

type MovieActionRequest = (data: IApiResponse.IMovie) => void;

const mapDispatchToProps: MapDispatchToProps = {
    add: addMovie,
    edit: editMovie,
};

const mapStateToProps: MapStateToProps = (
    state: GlobalState
): {
    errorMessage: string[] | null;
} => ({
    errorMessage: state.movieEditor.errorMessage,
});

const initialValues: IApiResponse.IMovie = {
    id: 0,
    overview: 'overview',
    title: 'title',
    release_date: 'release date',
    genres: ['genres'],
    runtime: 0,
    poster_path: 'poster_path',
};

const MovieFormComponent: React.FC<MovieFormProps> = ({
    legend,
    fields,
    movieId,
    errorMessage,
    edit,
    closeHandler,
    add,
}: MovieFormProps) => {
    const isEditForm: boolean = !!movieId;
    const sendMovieData: MovieActionRequest = (movieData: IApiResponse.IMovie) => {
        if (isEditForm) {
            edit(movieData);
        } else {
            add(movieData);
        }
    };
    const [errors, setErrors] = useState(null); // will be parsed on ui
    const [validForm, setValidForm] = useState(false);
    const [movie, setMovie] = useState({
        ...initialValues,
    });
    // tslint:disable-next-line: typedef
    const formik = useFormik({
        initialValues: {},
        onSubmit: async () => {
            sendMovieData(movie);
        },
    });
    const cancel: React.MouseEventHandler = (event: React.MouseEvent): void => {
        closeHandler(event);
    };
    const validate: any = () => {
        if (!validForm && errorMessage) {
            setErrors(errorMessage);
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    };

    const save: React.MouseEventHandler = (event: any): void => {
        formik.handleSubmit(event);
        validate();
        if (validForm) {
            closeHandler(event);
        }
    };

    useEffect(() => {
        if (movieId) {
            MovieService.movieActionRequest({
                id: movieId,
            }).then((requestedMovie: IApiResponse.IMovie) => {
                setMovie(requestedMovie);
            });
        } else {
            setMovie({ ...initialValues });
        }
    }, [errorMessage]);

    return (
        <EditForm onSubmit={formik.handleSubmit}>
            <EditFormFieldset>
                <EditFormLegend>{legend}</EditFormLegend>
                {fields.map(
                    (field: FormField, index: number): JSX.Element => (
                        <React.Fragment key={index}>
                            <Label htmlFor={field.movieField}>{field.label}</Label>
                            <Input
                                type="text"
                                name={field.label}
                                onChange={formik.handleChange}
                                id={field.movieField}
                                placeholder={
                                    movie[field.movieField]
                                        ? movie[field.movieField].toString()
                                        : ''
                                }
                            />
                        </React.Fragment>
                    )
                )}
                <p>{!validForm ? errors : null}</p>
                <ButtonPanel>
                    <Button buttonTheme="saveButton" onClick={save} type="submit">
                        {isEditForm ? 'EDIT' : 'SAVE'}
                    </Button>
                    <Button buttonTheme="cancelButton" onClick={cancel}>
                        CANCEL
                    </Button>
                </ButtonPanel>
            </EditFormFieldset>
        </EditForm>
    );
};

export const MovieForm: React.FC<MovieFormProps> = connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieFormComponent);
