export type IconsId =
  | "docker"
  | "graphql"
  | "kubernetes"
  | "programming-languages-c-sharp"
  | "programming-languages-html"
  | "programming-languages-javascript"
  | "typescript";

export type IconsKey =
  | "Docker"
  | "Graphql"
  | "Kubernetes"
  | "ProgrammingLanguagesCSharp"
  | "ProgrammingLanguagesHtml"
  | "ProgrammingLanguagesJavascript"
  | "Typescript";

export enum Icons {
  Docker = "docker",
  Graphql = "graphql",
  Kubernetes = "kubernetes",
  ProgrammingLanguagesCSharp = "programming-languages-c-sharp",
  ProgrammingLanguagesHtml = "programming-languages-html",
  ProgrammingLanguagesJavascript = "programming-languages-javascript",
  Typescript = "typescript",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Docker]: "61697",
  [Icons.Graphql]: "61698",
  [Icons.Kubernetes]: "61699",
  [Icons.ProgrammingLanguagesCSharp]: "61700",
  [Icons.ProgrammingLanguagesHtml]: "61701",
  [Icons.ProgrammingLanguagesJavascript]: "61702",
  [Icons.Typescript]: "61703",
};
