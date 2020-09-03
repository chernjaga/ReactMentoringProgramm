import { StyledSortOptions, Select, Option } from './SortOptionsStyleSet.styled';

type SortProps = {
    values: string[]
};

export const SortOptions: React.FC<SortProps> = (props: SortProps) => (
    <StyledSortOptions>
        Sort By:
        <Select>
            {props.values.map((value: string): JSX.Element => (
                <Option value={value} key={value}>
                    {value}
                </Option>
            ))}
        </Select>
    </StyledSortOptions>
);