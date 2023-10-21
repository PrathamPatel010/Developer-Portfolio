/* eslint-disable react/prop-types */

const CustomButton = ({ text, url }) => {
    const redirectToBlog = (url) => {
        if (url) {
            window.open(url, '_blank');
        }
    };

    return (
        <button className="button" onClick={() => redirectToBlog(url)}>
            {text}
        </button >
    );
};

export default CustomButton;