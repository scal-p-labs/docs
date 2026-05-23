import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig, logo } from "./shared";
import Image from "next/image";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: (
        <div className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={24} height={24} />
          {appName}
        </div>
      ),
    },

    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
