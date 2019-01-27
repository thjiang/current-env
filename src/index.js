export function getEnv(domain) {
    const host = location.host;

    let env = 'prod';

    if (host.includes(`dev.${domain}`)) {
        env = 'dev';
    }
    if (host.includes(`test.${domain}`)) {
        env = 'test';
    }
    if (host.includes(`pre.${domain}`)) {
        env = 'pre';
    }

    return env;
}
