import type { NextConfig } from "next"
import createMDX from '@next/mdx'
import path from 'path'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `@use "variables" as *;@use "mixins" as *;`
  }
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig);
