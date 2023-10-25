import { useParams } from 'react-router';
import projects from '../../data/projects';
const ProjectBody = () => {
    return (
        <>
            <section className="projectpage-body">
                <YtVideoFrame />
                <ProjectInfo />
            </section>
        </>
    )
}


const ProjectInfo = () => {
    const { projectID } = useParams();
    const projectIndex = parseInt(projectID);
    const project = projects.find(p => p.projectIndex === projectIndex);
    document.title = `Project ${projectIndex} - ${project.name}`;
    return (
        <div className="project-moreinfodiv mt-4">
            <div dangerouslySetInnerHTML={{ __html: project.moreinfo }} style={{ border: '0.5px solid green', borderRadius: '5px', padding: '0.5rem', backgroundColor: '#472948', color: '#fff' }}></div>
        </div>
    )
}


const YtVideoFrame = () => {
    const { projectID } = useParams();
    const projectIndex = parseInt(projectID);
    const project = projects.find(p => p.projectIndex === projectIndex);
    return (
        <div className="ytvideo-div">
            <iframe className="iframe-yt" width="560" height="315"
                src={project.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen >
            </iframe>
        </div>
    )
}

export default ProjectBody;