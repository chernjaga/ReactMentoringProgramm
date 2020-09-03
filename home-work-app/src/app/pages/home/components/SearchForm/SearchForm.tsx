import { Form, InputWrapper, Label, Input, Button } from './SearchFormStyleSet.styled';

export const SearchForm: React.FC = () => (
    <Form>
        <Label>FIND YOUR MOVIE</Label>
        <InputWrapper>
            <Input/>
            <Button>SEARCH</Button>
        </InputWrapper>
    </Form>
);