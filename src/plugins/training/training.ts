import { KeepTrackApiEvents } from '@app/interfaces';
import { keepTrackApi } from '@app/keepTrackApi';
import { openColorbox } from '@app/lib/colorbox';
import logoPng from '@public/img/logo.png';
import { settingsManager } from '@app/settings/settings';

import { KeepTrackPlugin } from '../KeepTrackPlugin';

export class TrainingPlugin extends KeepTrackPlugin {
  readonly id = 'TrainingPlugin';
  protected dependencies_ = [];

  bottomIconImg = logoPng;
  bottomIconLabel = 'EHS Training';
  bottomIconElementName = 'training-bottom-icon';

  helpTitle = 'Training';
  helpBody = 'Open the training window to view course content and exercises.';

  addHtml(): void {
    super.addHtml();
  }

  bottomIconCallback = () => {
    const url = `${settingsManager.installDirectory}training/index.html`;
    openColorbox(url);
  };

  addJs(): void {
    super.addJs();

    keepTrackApi.register({
      event: KeepTrackApiEvents.uiManagerFinal,
      cbName: this.id,
      cb: () => {
        // no-op for now
      },
    });
  }
}


