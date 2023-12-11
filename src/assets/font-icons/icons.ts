export type IconsId =
  | "c-sharp"
  | "docker"
  | "graphql"
  | "html"
  | "javascript"
  | "kubernetes"
  | "typescript";

export type IconsKey =
  | "CSharp"
  | "Docker"
  | "Graphql"
  | "Html"
  | "Javascript"
  | "Kubernetes"
  | "Typescript";

export enum Icons {
  CSharp = "c-sharp",
  Docker = "docker",
  Graphql = "graphql",
  Html = "html",
  Javascript = "javascript",
  Kubernetes = "kubernetes",
  Typescript = "typescript",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.CSharp]: "61697",
  [Icons.Docker]: "61698",
  [Icons.Graphql]: "61699",
  [Icons.Html]: "61700",
  [Icons.Javascript]: "61701",
  [Icons.Kubernetes]: "61702",
  [Icons.Typescript]: "61703",
};
