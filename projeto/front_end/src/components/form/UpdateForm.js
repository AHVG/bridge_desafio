import SubmitButton from './SubmitButton.js';

function UpdateForm({handleUpdate}) {

    function submit(event) {
        event.preventDefault();
        handleUpdate();
    }

    return (
        <form onSubmit={submit}>
            <SubmitButton text="atualizar"/>
        </form>
    );
}

export default UpdateForm;
