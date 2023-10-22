/* eslint-disable react/prop-types */

const CustomButton = ({ text, url }) => {
    const redirectToURL = (url) => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <button className="button" onClick={() => redirectToURL(url)}>
            {text}
        </button >
    );
};

export default CustomButton;