import { AllureRuntime, CucumberJSAllureFormatter } from 'allure-cucumberjs';
import { ALLURE_REPORT_DIR } from 'constants/directories';

export default class AllureReporter extends CucumberJSAllureFormatter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/explicit-module-boundary-types
  constructor(options: any) {
    const allureRuntime = new AllureRuntime({ resultsDir: ALLURE_REPORT_DIR });
    super(options, allureRuntime, {
      labels: {
        epic: [/@epic=(.*)/],
        issue: [/@issue=(.*)/]
      }
    });

    const properties = AllureReporter.buildEnvProperties();
    allureRuntime.writeEnvironmentInfo(properties);
  }

  private static buildEnvProperties() {
    return {
      ...AllureReporter.addEnvironment(),
      ...AllureReporter.addBranch()
    };
  }

  private static addEnvironment() {
    const targetHost = (process.env.TARGET_HOST as string) || 'local';
    return { Environment: targetHost };
  }

  private static addBranch() {
    const branch = process.env.BRANCH;
    return branch ? { Branch: branch } : undefined;
  }
}
