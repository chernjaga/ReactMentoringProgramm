import { StyledSortOptions, Select, Option } from './SortOptionsStyleSet.styled';

type SortProps = {
    values: string[],
    onValueChange: (value: string) => void
};

type ChangeEventType = (event: React.ChangeEvent<HTMLSelectElement>) => void;

export const SortOptions: React.FC<SortProps> = ({values, onValueChange}: SortProps) => {
    const handleChange: ChangeEventType = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onValueChange(event.target.value);
    };

    return (
        <StyledSortOptions>
            Sort By:
            <Select onChange={handleChange} defaultValue="TITLE">
                {values.map((value: string): JSX.Element => (
                    <Option value={value} key={value}>
                        {value}
                    </Option>
                ))}
            </Select>
        </StyledSortOptions>
    );
};