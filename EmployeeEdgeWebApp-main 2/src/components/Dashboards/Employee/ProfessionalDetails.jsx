export default (props) => {
  const renderKeyValue = (label, value) => (
    <div className="key-value-pair">
      <div className="key">{label}</div>
      <div className="value">{value}</div>
    </div>
  );

  return (
    <div className="details-section">
      {renderKeyValue("Employment Code:", props.details.employment_code)}
      {renderKeyValue("Company Mail:", props.details.company_mail)}
      {renderKeyValue("Office Phone:", props.details.office_phone)}
      {renderKeyValue("City:", props.details.city)}
      {renderKeyValue("Office Address:", props.details.office_address)}
      {renderKeyValue(
        "Reporting Manager:",
        props.details.reporting_manager_mail
      )}
      {renderKeyValue("HR Name:", props.details.hr_name)}
      {renderKeyValue("Employment History:", props.details.employment_history)}
      {renderKeyValue("Date of Joining:", props.details.date_of_joining)}
    </div>
  );
};
