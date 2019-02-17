import React from 'react';
// when we use statless function we get ride of this before props
const Form = props => (
    <div>
        <form onSubmit={props.getweather}>
            <input type="text" name="city" placeholder="City..." />
            <input type="text" name="country" placeholder="Country..." />
            <button>Get Weather</button>
        </form>
    </div>
)
export default Form;