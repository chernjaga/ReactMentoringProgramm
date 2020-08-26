import styled, { StyledComponent }  from 'styled-components';
import { stylesConfig } from '../../configs/style.configs';

type MenuProps = {
    menuItems: string[]
};

const StyledContextMenu: StyledComponent<'ul', {}> = styled.ul.attrs({
    role: 'menu'
})`
    background-color: ${stylesConfig.colors.black};
    position: relative;
    padding: 8px 0;
    border-radius: 4px;
    font-weight: 100;
    font-size: 0.8rem;
`;

const StyledMenuItem: StyledComponent<'li', {}> = styled.li.attrs({
    role: 'menuItem'
})`
    padding: 8px 16px;
    &:hover {
        background-color: ${stylesConfig.colors.pink};
    }
`;

export class ContextMenu extends React.PureComponent<MenuProps> {
    props: MenuProps;

    constructor(props: MenuProps) {
        super(props);
        this.props = props;
    }

    clickHandler(event: React.MouseEvent): void {
        console.log(event);

        event.stopPropagation();
    }

    render(): JSX.Element {
        return (
            <>
                <StyledContextMenu>
                    {this.props.menuItems.map((item: string) => (
                        <StyledMenuItem onClick={this.clickHandler} key={item}>{item}</StyledMenuItem>
                    ))}
                </StyledContextMenu>
            </>
        );
    }
}
