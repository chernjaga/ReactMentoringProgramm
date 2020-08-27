import { StyledContextMenu } from './StyledContextMenu.styled';
import { StyledMenuItem } from './StyledMenuItem.styled';

type MenuProps = {
    menuItems: string[]
};

export class ContextMenu extends React.PureComponent<MenuProps> {
    props: MenuProps;

    constructor(props: MenuProps) {
        super(props);
        this.props = props;
    }

    clickHandler(event: React.MouseEvent): void {
        event.preventDefault();
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
