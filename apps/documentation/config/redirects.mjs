import path from "path";
import { fileURLToPath } from "url";
import shell from "shelljs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.join(__dirname, "..");
const contentDir = path.join(rootDir, "content");
const docsDir = path.join(contentDir, "docs");
const componentsDocsDir = path.join(docsDir, "components");
const guideDocsDir = path.join(docsDir, "guide");
const customizationDocsDir = path.join(docsDir, "customization");
const apiReferencesDocsDir = path.join(docsDir, "api-references");

const getFolderNames = (dir) => {
  const names = shell
    .ls("-R", dir)
    .map((file) => path.join(process.cwd(), dir, file))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.basename(file, ".mdx"));

  return names;
};

const getFolderRoutes = (names = [], prefix = "") => {
  return names.map((name) => {
    return {
      source: `/${name}`,
      destination: `/docs/${prefix}/${name}`,
      permanent: true,
    };
  });
};

async function redirect() {
  const componentsName = getFolderNames(componentsDocsDir);
  const guideName = getFolderNames(guideDocsDir);
  const customizationName = getFolderNames(customizationDocsDir);
  const apiReferencesName = getFolderNames(apiReferencesDocsDir);

  return [
    ...getFolderRoutes(componentsName, "components"),
    ...getFolderRoutes(guideName, "guide"),
    ...getFolderRoutes(customizationName, "customization"),
    ...getFolderRoutes(apiReferencesName, "api-references"),
    {
      source: "/docs",
      destination: "/docs/guide/introduction",
      permanent: true,
    },
    {
      source: "/guide",
      destination: "/docs/guide/introduction",
      permanent: true,
    },
    {
      source: "/introduction",
      destination: "/docs/guide/introduction",
      permanent: true,
    },
    {
      source: "/docs/intro",
      destination: "/docs/guide/introduction",
      permanent: true,
    },
    {
      source: "/docs/getting-started",
      destination: "/docs/guide/introduction",
      permanent: true,
    },
    {
      source: "/docs/introduction",
      destination: "/docs/guide/introduction",
      permanent: true,
    },
    {
      source: "/theme",
      destination: "/docs/customization/theme",
      permanent: true,
    },
    {
      source: "/docs/theme",
      destination: "/docs/customization/theme",
      permanent: true,
    },
    {
      source: "/components/:path*",
      permanent: true,
      destination: "/docs/components/:path*",
    },
    {
      source: "/docs/components",
      destination: "/docs/components/button",
      permanent: true,
    },
    {
      source: "/components",
      destination: "/docs/components/button",
      permanent: true,
    },
    {
      source: "/customization",
      destination: "/docs/customization/theme",
      permanent: true,
    },
    {
      source: "/api",
      destination: "/docs/api-references/flexiui-provider",
      permanent: true,
    },
  ];
}

export default redirect;
