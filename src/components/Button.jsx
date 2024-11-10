import {styled} from 'styled-components'
import { color, typescales } from '../utils';

export const Button = styled.button`
    width: 8rem;
    font-size: ${typescales.h5};
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: ${color[200]};
    color: ${color[300]};
    border-radius: 5px;
    border: none;
    box-shadow: 1px 1px 0px ${color[400]};
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s linear, color 0.3s linear;

    &:hover{
        background-color: ${color[400]};
        color: ${color[300]};
    }

    &:focus{
        background-color: ${color[400]};
        color: ${color[500]};

    }

    &:active{
        background-color: ${color[400]};
        color: ${color[500]};
        outline: 5px auto ${color[500]};
    }

    &:disabled{
        background-color: ${color[200]};
        color: ${color[500]};
        cursor: not-allowed;
    }

    &.large{
        width: 12rem;
        padding: 15px 20px;
        font-size: ${typescales.h4};
    }
    &.small{
        width: 6rem;
        padding: 5px 10px;
        font-size: ${typescales.subtext};
    }
`;

export const PrimaryButton = styled(Button)`
    background-color: ${color[300]};
    color: ${color[400]};

    &:hover{
        background-color: ${color[500]};
        color: ${color[300]};
    }

    &:focus{
        background-color: ${color[500]};
        color: ${color[400]};
    }

    &:active{
        background-color: ${color[500]};
        color: ${color[400]};
        outline: 5px auto ${color[500]};
    }

    &:disabled{
        background-color: ${color[100]};
        color: ${color[500]};
    }
`;