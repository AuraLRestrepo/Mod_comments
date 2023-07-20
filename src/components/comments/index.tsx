import React from 'react';
import * as MdIcons from "react-icons/md";

const index = () => {
    return (
        <section className='header__container_post'>
            <div className="header_user_current_post">
                <MdIcons.MdPerson size={40} className='current_user'/>
            </div>
            <div className="header_input_data_post">
                <div className="header_input_message">
                    <input type="text" name="" id="" />
                </div>
                <div className="header_input_button_post">
                    <button>Enviar</button>
                </div>
            </div>
        </section>
    );
};

export default index;