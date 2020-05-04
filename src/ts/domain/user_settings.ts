import { UserSettings, getDefaultUserSettings } from "../settings/settings";

export class SettingsStorage {
    async getSettings(documentID: string): Promise<UserSettings> {
        const storedSettings = await figma.clientStorage.getAsync(this.getSettingsID(documentID)) as UserSettings
        if (!storedSettings) {
            return getDefaultUserSettings()
        }
        
        return storedSettings
    }

    async setSettings(documentID: string, settings: UserSettings): Promise<void> {
        await figma.clientStorage.setAsync(this.getSettingsID(documentID), settings)
    }

    private getSettingsID(documentID: string): string {
        return "user_settings_" + documentID
    }
}