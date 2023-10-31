/**
 *
 * @param {String} name
 * @param {String} phone
 * @param {String} email
 * @return {jsx}
 */
function ContactRow({name, phone, email}) { // Seulement si connais déjà params de props sinon alternatives
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
}

export default ContactRow;

// Alternatives :
/*
function ContactRow(props) {
  const {name, phone, email} = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
}


function ContactRow(props) {
  const {name, phone, email} = props;
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
    </tr>
  );
}
*/


