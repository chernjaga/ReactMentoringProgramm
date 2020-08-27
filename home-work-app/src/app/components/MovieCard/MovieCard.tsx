import { EditMenu } from '../EditMenu/EditMenu';
import { Link } from 'react-router-dom';
import { ListItem } from './ListItem.styled';
import { StyledCard } from './StyledCard.styled';
import { Poster } from './Poster.styled';
import { Title } from './Title.styled';
import { Genres } from './Genres.styled';
import { Year } from './Year.styled';
import { YearBorder } from './YearBorder.styled';

type CardProps = {
    title: string,
    releaseDate: string,
    genres: string[],
    coverUrl: string,
    id: number,
    key?: number
};

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