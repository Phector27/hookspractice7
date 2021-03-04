import { useState } from 'react'

const useSelect = (stateIni, options) => {

    // State del custom hook    
    const [state, setState] = useState(stateIni)


    const SelectNews = () => (
        <select
            className='browser-default'
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {options.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
            ))}

        </select>
    )

    return [state, SelectNews]
}

export default useSelect;