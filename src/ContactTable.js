import ContactRow from './ContactRow';

/**
 *
 * @return {jsx}
 */
function ContactTable() {
  const data = [
    {name: 'Tom Jackson',
      phone: '555-444-3333',
      email: 'tom@gmail.com'},
    {name: 'James Morand',
      phone: '999-444-3333',
      email: 'toasdasdasdm@gmail.com'},
  ];

  const jsxData = data.map((elt) => (<ContactRow
    name={elt.name}
    phone={elt.phone}
    email={elt.email}/>));

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      {jsxData}
    </table>
  );
}

export default ContactTable;
