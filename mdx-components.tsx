// app/mdx-components.tsx
import defaultComponents from 'fumadocs-ui/mdx';
import { APIPage } from 'fumadocs-openapi/ui';
import { openapi } from '@/lib/source';
import type { MDXComponents } from 'mdx/types';
import { createGenerator } from 'fumadocs-typescript';
import { AutoTypeTable } from 'fumadocs-typescript/ui';
import { ImageZoom } from 'fumadocs-ui/components/image-zoom';
import { TypeTable } from 'fumadocs-ui/components/type-table';


const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
    return {
        ...defaultComponents,
        APIPage: (props) => <APIPage {...openapi.getAPIPageProps(props)} />,
        AutoTypeTable: (props) => (
            <AutoTypeTable {...props} generator={generator} />
        ),
        img: (props) => <ImageZoom {...(props as any)} />,
        ...components,
    };
}
