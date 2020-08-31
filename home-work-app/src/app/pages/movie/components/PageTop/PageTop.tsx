import { Logo } from '../../../../components/Logo';
import { stylesConfig } from '../../../../configs/style.configs';

const logoColor: string = stylesConfig.colors.pink;

export const PageTop: React.FC = () => (
    <>
        <Logo logoColor={logoColor}/>
    </>
);