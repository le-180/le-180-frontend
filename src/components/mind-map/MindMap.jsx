import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const nodes = [
  {
    id: '1', // required
    position: { x: 100, y: 200 }, // required
    data: { label: 'Hello' }, // required
  },
  { id: '2', position: { x: 200, y: 300 }, data: { label: 'World' } },
  { id: '3', position: { x: 0, y: 300 }, data: { label: 'Earth' } },
];
const edges = [
  { id: '1-3', source: '1', target: '3' },
  { id: '1-2', source: '1', target: '2' },
];

function Flow() {
  return (
    <div style={{ height: '100%' }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default Flow;
