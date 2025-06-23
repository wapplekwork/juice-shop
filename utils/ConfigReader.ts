import { parse } from 'yaml';
import * as fs from 'fs';
import * as path from 'path';

export class ConfigReader {
    private static instance: ConfigReader;
    private configData: any;

    private constructor() {
        const configPath = path.join(__dirname, '../data/test-data.yml');
        const fileContents = fs.readFileSync(configPath, 'utf8');
        this.configData = parse(fileContents);
    }

    public static getInstance(): ConfigReader {
        if (!ConfigReader.instance) {
            ConfigReader.instance = new ConfigReader();
        }
        return ConfigReader.instance;
    }

    /**
     * Get environment configuration
     * @param env The environment name (e.g., 'dev', 'staging')
     */
    public getEnvironmentConfig(env: string) {
        return this.configData.environment[env];
    }

    /**
     * Get user credentials
     * @param userType The type of user (e.g., 'customer', 'admin')
     */
    public getUserCredentials(userType: string) {
        return this.configData.users[userType];
    }

    /**
     * Get test data
     * @param category The category of test data (e.g., 'products')
     */
    public getTestData(category: string) {
        return this.configData.testData[category];
    }
}
