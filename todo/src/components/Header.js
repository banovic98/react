import Button from './Button';

function Header({ title }) {

    function onClick () {
        console.log('test');
    }

    return (
        <div className='container'>
            <h1>{title}</h1>
            <Button onClick={onClick} text='Add task' />
        </div>
    )
}

export default Header; 