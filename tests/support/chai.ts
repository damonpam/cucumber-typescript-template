import chai from 'chai';

// Sets length threshold for actual and expected values in assertion errors.
// If this threshold is exceeded, the value is truncated.
chai.config.truncateThreshold = 0; // disable truncating

export const expect = chai.expect;
