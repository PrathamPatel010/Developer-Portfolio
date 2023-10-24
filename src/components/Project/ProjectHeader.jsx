import { useParams } from 'react-router';
import projects from '../../data/projects';
import photo from '../../assets/photo.png';

const ProjectHeader = () => {
    const { projectID } = useParams();
    const projectIndex = parseInt(projectID);
    const project = projects.find(p => p.projectIndex === projectIndex);
    return (
        <section className="projectpage-header">
            <img onClick={() => { window.location.href = "/" }} className="img img-fluid mx-2" style={{ width: '5rem', border: '1px solid transparent', borderRadius: '50%' }} src={photo} alt="back-to-home btn" />
            <h2>{project.name} - {project.description}</h2>
        </section>
    )
}

export default ProjectHeader;