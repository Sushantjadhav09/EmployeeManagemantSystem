export default (props) => {
  const renderKeyValue = (label, value) => (
    <div className="key-value-pair">
      <div className="key">{label}</div>
      <div className="value">{value}</div>
    </div>
  );

  return (
    <div className="details-section">
      {props.details.length > 0 ? (
        props.details.map((project, index) => (
          <div key={index} className="project-section">
            <h4>Project ID: {project.project_id}</h4>
            {renderKeyValue("Project Code:", project.project_code)}
            {renderKeyValue("Start Date:", project.start_date)}
            {renderKeyValue("End Date:", project.end_date)}
            {renderKeyValue(
              "Client/Project Name:",
              project.client_or_project_name
            )}
            {renderKeyValue(
              "Reporting Manager:",
              project.reporting_manager_code
            )}
          </div>
        ))
      ) : (
        <p>No project details available.</p>
      )}
    </div>
  );
};
