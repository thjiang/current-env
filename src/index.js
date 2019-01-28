export default function getEnv(domain) {
    const {
        location: { host }
    } = window;

    let env = "prod";

    if (host.includes(`dev.${domain}`)) {
        env = "dev";
    }
    if (host.includes(`test.${domain}`)) {
        env = "test";
    }
    if (host.includes(`pre.${domain}`)) {
        env = "pre";
    }

    return env;
}
