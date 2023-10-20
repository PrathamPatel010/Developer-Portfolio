import SocialMediaButtons from 'react-social-media-buttons';

const SocialComponent = () => {
    return (
        <>
            <div className="text-center">
                <SocialMediaButtons
                    links={['https://twitter.com/Twitter', 'https://www.instagram.com/instagram/', 'https://www.linkedin.com/company/linkedin/']}
                    buttonStyle={{ width: '45px', height: '45px', margin: '0px 12px', backgroundColor: '#0e1215', borderRadius: '50%', border: '2px solid #fefbfb' }}
                    iconStyle={{ color: '#fcfcfd' }}
                    openNewTab={true}
                />
            </div>
        </>
    )
}

export default SocialComponent;