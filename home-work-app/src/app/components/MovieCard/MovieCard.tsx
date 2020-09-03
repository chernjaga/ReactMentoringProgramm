import { EditMenu } from '../EditMenu/EditMenu';
import { Link } from 'react-router-dom';
import { ListItem } from './ListItem.styled';
import { StyledCard } from './StyledCard.styled';
import { MovieCardPoster } from './Poster.styled';
import { MovieCardTitle } from './Title.styled';
import { MovieCardGenres } from './Genres.styled';
import { MovieCardYear } from './Year.styled';
import { YearBorder } from './YearBorder.styled';

type CardProps = {
    title: string,
    releaseDate: string,
    genres: string[],
    coverUrl: string,
    id: number,
    key?: number
};

export const MovieCard: React.FC<CardProps> = ({id, coverUrl, title, genres, releaseDate}: CardProps) => (
    <ListItem>
        <Link to={`/movie?id=${id}`}>
            <StyledCard>
                <MovieCardPoster>
                    <img src={coverUrl} alt={title}/>
                    <EditMenu movieId={id}/>
                </MovieCardPoster>

                <MovieCardTitle>
                    {title}
                </MovieCardTitle>
                <MovieCardGenres>
                    {genres.join(' / ')}
                </MovieCardGenres>

                <MovieCardYear>
                    <YearBorder>
                        {new Date(releaseDate).getFullYear()}
                    </YearBorder>
                </MovieCardYear>
            </StyledCard>
        </Link>
    </ListItem>
);