import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../configs/style.configs';
import { EditMenu } from './editMenu';
import { Link } from 'react-router-dom';

type CardProps = {
    title: string,
    releaseDate: string,
    genres: string[],
    coverUrl: string,
    id: string,
    key?: string
};

const cardBackground: string = stylesConfig.colors.black;

const StyledCard: StyledComponent<'span', {}> = styled.span`
    overflow: hidden;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows: 82% 13% 5%;
    grid-auto-rows: max-content;
`;

const Poster: StyledComponent<'div', {}> = styled.div`
    grid-area: 1/1/2/2;
    max-width: 130%;
`;

const Title: StyledComponent<'div', {}> = styled.div`
    grid-area: 2/1/2/1;
    padding: 8px 0;
    font-size: 0.9rem;
    background-color: ${cardBackground};
    z-index: 1;
`;

const Genres: StyledComponent<'div', {}> = styled.div`
    grid-area: 3/1/3/3;
    background-color: ${cardBackground};
    font-size: 0.6rem;
    z-index: 1;
`;

const Year: StyledComponent<'div', {}> = styled.div`
    grid-area: 2/2/2/2;
    background-color: ${cardBackground};
    padding: 8px 0 8px 8px;
    z-index: 1;
    text-align: right;
`;

const YearBorder: StyledComponent<'span', {}> = styled.span`
    border-radius: 4px;
    padding: 4px 8px;
    border: #fff solid 1px;
    font-size: 0.6rem;
`;

const ListItem: StyledComponent<'li', {}> = styled.li.attrs({
    className: 'hoverMenuContainer'
})`
    position: relative;
`;

export const MovieCard: React.FC<CardProps> = (props: CardProps) => (
    <ListItem>
        <Link to={`/movie?id=${props.id}`}>
            <StyledCard>
                <Poster>
                    <img src={props.coverUrl} alt={props.title}/>
                    <EditMenu/>
                </Poster>

                <Title>
                    {props.title}
                </Title>
                <Genres>
                    {props.genres.join(' / ')}
                </Genres>

                <Year>
                    <YearBorder>
                        {new Date(props.releaseDate).getFullYear()}
                    </YearBorder>
                </Year>
            </StyledCard>
        </Link>
    </ListItem>
);