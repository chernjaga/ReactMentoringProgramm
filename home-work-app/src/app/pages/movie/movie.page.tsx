import { Description } from './components/Description';
import { Logo } from '../../components/Logo';
import { stylesConfig } from '../../configs/style.configs';

const logoColor: string = stylesConfig.colors.pink;

export class Movie extends React.PureComponent {
    render(): JSX.Element {
        return (
            <>
                <Logo logoColor={logoColor}/>
                <Description/>
            </>
        );
    }
}