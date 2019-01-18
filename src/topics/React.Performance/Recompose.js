// import React, { Children } from 'react';
// import pure from 'recompose/pure';
//
// const DatagridBody = ({ resource, ids, data, children }) => (
//   <tbody>
//   {ids.map(id => (
//     <tr key={id}>
//       {Children.map(children, (field, index) =>
//         <DatagridCell
//           record={data[id]}
//           key={`${id}-${index}`}
//           field={field}
//           resource={resource}
//         />
//       )}
//     </tr>
//   ))}
//   </tbody>
// );
// export default pure(DatagridBody);

// import React, { Children } from 'react';
// import onlyUpdateForKeys from ‘recompose/onlyUpdateForKeys’;
// const DatagridBody = ({ resource, ids, data, children }) => (
// ...
// );
// export default onlyUpdateForKeys([‘ids’, ‘data’])(DatagridBody);