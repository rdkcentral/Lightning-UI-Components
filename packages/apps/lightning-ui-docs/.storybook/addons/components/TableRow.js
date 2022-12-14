import React from 'react';

export default function TableRow({ label, control }) {
  return (
    <tr>
      <td>{label}</td>
      <td>{control}</td>
    </tr>
  );
}
