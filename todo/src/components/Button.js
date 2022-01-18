import PropTypes from 'prop-types';

function Button({ text, onClick }) {

    return (
        <div>
            <button onClick={onClick} className='btn'>{text}</button>
        </div>
    )
}

export default Button;