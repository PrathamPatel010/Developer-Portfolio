/* eslint-disable react/prop-types */

const CustomButton = ({ text, url }) => {
    const redirectToURL = (url) => {
        if (url) {
            window.open(url, '_blank', 'noopener', 'noreferrer');
        }
    };

    return (
        <button className="button" style={{ width: '11rem' }} onClick={() => redirectToURL(url)}>
            {text}
        </button >
    );
};

export default CustomButton;