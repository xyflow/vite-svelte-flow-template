<script lang="ts">
  import { writable } from 'svelte/store';
  import {
    SvelteFlow,
    Controls,
    Background,
    MiniMap,
    type Node,
    type Edge,
  } from '@xyflow/svelte';

  import '@xyflow/svelte/dist/style.css';

  const nodes = writable<Node[]>([
    {
      id: '1',
      data: { label: 'Hello' },
      position: { x: 0, y: 0 },
    },
    {
      id: '2',
      data: { label: 'World' },
      position: { x: 150, y: 150 },
    },
  ]);

  const edges = writable<Edge[]>([
    {
      id: '1-2',
      source: '1',
      target: '2',
    },
  ]);
</script>

<div style:height="100vh">
  <SvelteFlow {nodes} {edges} fitView>
    <Controls />
    <Background />
    <MiniMap />
  </SvelteFlow>
</div>
