// lib/source.ts
import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createOpenAPI, attachFile } from 'fumadocs-openapi/server';
export const openapi = createOpenAPI();
export const source = loader({
    baseUrl: '/docs',
    source: docs.toFumadocsSource(),
    pageTree: { attachFile }, // optional
});
