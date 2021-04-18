import { Before, BeforeAll, HookScenarioResult, setDefaultTimeout } from 'cucumber';
import { logger } from 'src/utils/logger';

BeforeAll(function () {
  const time = 30000;
  setDefaultTimeout(time);
});

Before(function (scenario: HookScenarioResult) {
  const {
    pickle: { name }
  } = scenario;

  logger.notice(`🧪 Starting Scenario: ${name}`);
});
