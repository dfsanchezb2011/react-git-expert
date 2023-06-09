import { useState } from "react"
import PropTypes from "prop-types"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    // {target} equivale a la desestructuración de event.target
    const onInputChange = ({ target }) => setInputValue(target.value);
    /* const onInputChange = (event) => setInputValue(event.target.value); */

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) {
            return;
        }
        /* onNewCategory(categories => [inputValue, ...categories]); */

        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit}>{/* <form onSubmit={(event) => onSubmit(event)}> */}
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}

                // Ambas líneas hacen lo mismo
                // Pero se reduce el código al saber que onChange por defecto manda el objeto event
                // value={inputValue} onChange={(event) => onInputChange(event)}
                onChange={onInputChange}

            />
        </form>
    )
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}