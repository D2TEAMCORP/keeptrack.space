import { KeepTrackApiEvents } from '@app/interfaces';
import { keepTrackApi } from '@app/keepTrackApi';
import { openColorbox } from '@app/lib/colorbox';
import helpPng from '@public/img/icons/help.png';

import { KeepTrackPlugin } from '../KeepTrackPlugin';

export class TrainingPlugin extends KeepTrackPlugin {
  readonly id = 'TrainingPlugin';
  protected dependencies_ = [];

  bottomIconImg = helpPng;
  bottomIconLabel = 'Training';
  bottomIconElementName = 'training-bottom-icon';

  helpTitle = 'Training';
  helpBody = 'Open the training window to view course content and exercises.';

  addHtml(): void {
    super.addHtml();
  }

  addJs(): void {
    this.bottomIconCallback = () => {
      openColorbox('/training/index.html');
    };

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


