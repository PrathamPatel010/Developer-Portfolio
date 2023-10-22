import { useParams } from 'react-router';
import projects from '../../data/projects';

const ProjectHeader = () => {
    const { projectID } = useParams();
    const projectIndex = parseInt(projectID);
    const project = projects.find(p => p.projectIndex === projectIndex);
    return (
        <section className="projectpage-header">
            <h2>{project.name} - {project.description}</h2>
        </section>
    )
}

export default ProjectHeader;