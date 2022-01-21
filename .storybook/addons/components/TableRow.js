import React from 'react';

export default function TableRow({ label, scope = '', control }) {
  return (
    <tr key={label + scope}>
      <td>{label}</td>
      <td>{control}</td>
    </tr>
  );
}