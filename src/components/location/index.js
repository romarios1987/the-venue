import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.3373079817043!2d24.01982581570987!3d49.854908179397604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473adda77961b531%3A0x64d2113ff4427326!2z0L_RgNC-0YHQvy4g0JLRj9GH0LXRgdC70LDQstCwINCn0LXRgNC90L7QstC-0LvQsCwgNDUsINCb0YzQstC-0LIsINCb0YzQstC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNzkwMDA!5e0!3m2!1sru!2sua!4v1544388008380"
                width="100%"
                height="500"
                title="location"
                frameBorder="0"
                allowFullScreen>
            </iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;