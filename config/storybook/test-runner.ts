import { toMatchImageSnapshot } from 'jest-image-snapshot';
import type { TestRunnerConfig } from '@storybook/test-runner';

const customSnapshotsDir = `${process.cwd()}/__screenshots__`;

const config: TestRunnerConfig = {
    setup() {
        expect.extend({ toMatchImageSnapshot });
    },
    async postVisit(page, context) {
        await page.evaluate(() => document.fonts.ready);
        const image = await page.screenshot();

        expect(image).toMatchImageSnapshot({
            customSnapshotsDir,
            customSnapshotIdentifier: context.id,
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    },
};

export default config;
