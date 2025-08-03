export default (props) => {
  const renderKeyValue = (label, value) => (
    <div className="key-value-pair">
      <div className="key">{label}</div>
      <div className="value">{value}</div>
    </div>
  );

  return (
    <div className="details-section">
      {renderKeyValue("Employee Full Name:", props.details.full_name)}
      {renderKeyValue("Date of Birth:", props.details.dob)}
      {renderKeyValue("Gender:", props.details.gender)}
      {renderKeyValue("Age:", props.details.age)}
      {renderKeyValue("Current Address:", props.details.current_address)}
      {renderKeyValue("Permanent Address:", props.details.permanent_address)}
      {renderKeyValue("Mobile:", props.details.mob_no)}
      {renderKeyValue("Personal Mail:", props.details.personal_mail)}
      {renderKeyValue(
        "Emergency Contact Name:",
        props.details.Emergency_contact_name
      )}
      {renderKeyValue(
        "Emergency Contact Mobile:",
        props.details.Emergency_mobile_no
      )}
    </div>
  );
};
