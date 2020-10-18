import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {
    EditForm,
    EditFormFieldset,
    EditFormLegend,
    Label,
    Input,
} from './EditFormStyleSet.styled';
import { ButtonPanel, Button } from '../CommonModalTemplate/ButtonPanel.styled';
import { FormField, MapDispatchToProps } from '../../../types';
import { addMovie } from '../../../redux/actions/addMovie';
import { editMovie } from '../../../redux/actions/editMovie';
import { IApiResponse } from '../../../interfaces/IApiResponse';
import { MovieService } from '../../../services/MovieService';

interface MovieFormProps extends MapDispatchToProps {
    legend: string;
    fields: FormField[];
    movieId?: number;
    closeHandler?: (event: React.MouseEvent) => void;
}

const mapDispatchToProps: MapDispatchToProps = {
    add: addMovie,
    edit: editMovie,
};

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
    edit,
    closeHandler,
    add,
}: MovieFormProps) => {
    const isEditForm: boolean = !!movieId;
    const [movie, setMovie] = useState({
        ...initialValues,
    });
    const cancel: React.MouseEventHandler = (event: React.MouseEvent): void => {
        closeHandler(event);
    };

    const save: React.MouseEventHandler = (event: React.MouseEvent): void => {
        // if (isEditForm) {
        //     edit({});
        // } else {
        //     add({});
        // }
        closeHandler(event);
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
    }, []);

    return (
        <EditForm>
            <EditFormFieldset>
                <EditFormLegend>{legend}</EditFormLegend>
                {fields.map(
                    (field: FormField): JSX.Element => (
                        <React.Fragment key={field.movieField}>
                            <Label htmlFor={field.movieField}>{field.label}</Label>
                            <Input
                                type="text"
                                name={field.label}
                                id={field.movieField}
                                placeholder={movie[field.movieField].toString()}
                            />
                        </React.Fragment>
                    )
                )}
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
    (): {} => ({}),
    mapDispatchToProps
)(MovieFormComponent);
